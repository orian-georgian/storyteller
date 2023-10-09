import { useQuery } from "react-query";
import axios from "axios";

import Title from "./components/title/Title";
import FormattedDate from "./components/formatted-date/FormattedDate";
import Actions from "./components/actions/Actions";
import Pages from "./components/pages/Pages";

import {
  Badge,
  Pagination,
  Sortable,
  Filters,
  Button,
  Spinner,
} from "../../components";

import { StoryStatuses, BadgeTypes } from "../../constants";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

import usePagination from "../../hooks/usePagination";
import useSorting from "../../hooks/useSorting";
import useFilters from "../../hooks/useFilters";

import "./Stories.scss";

const fetchStories = async ({
  page,
  nrOfRows,
  order,
  sortBy,
  search,
  status,
}) => {
  const baseUrl =
    "https://651ef03544a3a8aa47693ad3.mockapi.io/storyteller/stories";
  const searchParam = !!search ? `&search=${search}` : "";
  const statusParam = !!status ? `&status=${status}` : "";
  const sortParams = `&order=${order}&sortBy=${sortBy}`;
  const pagingParams = `limit=${nrOfRows}&page=${page}`;
  const url = `${baseUrl}?${pagingParams}${sortParams}${searchParam}${statusParam}`;
  const response = await axios.get(url);

  return response.data;
};

export default function Stories() {
  const {
    page,
    nrOfRows,
    changeNrOfRows,
    changePage,
    getPrevPage,
    getNextPage,
  } = usePagination();
  const { order, sortBy, changeSortingColumn, changeSortingOrder } =
    useSorting("lastModified");
  const { search, status, changeSearchQuery, changeStatusValue } = useFilters();
  const { data, error, isLoading } = useQuery(
    ["stories", page, nrOfRows, order, sortBy, search, status],
    () => fetchStories({ page, nrOfRows, order, sortBy, search, status })
  );

  if (error) {
    return "Error";
  }

  return (
    <div className="stories-page flex-box flex-column">
      <h1>Stories</h1>
      <div className="filters-container flex-box align-center">
        <Filters
          search={search}
          status={status}
          onSearchDone={changeSearchQuery}
          onStatusChanged={changeStatusValue}
        />
        <span className="items-pagination-details">Showing 1 to 20 of 176</span>
        <Button
          className="add-story-button"
          type="contained"
          variant="success"
          text="Add Story"
          icon={<Plus />}
        />
      </div>
      <div className="table-container">
        <Spinner visible={isLoading} />
        <table>
          <thead>
            <tr>
              <th className="title-column">
                <Sortable
                  column="title"
                  order={order}
                  sortBy={sortBy}
                  onOrderChanged={changeSortingOrder}
                  onColumnChanged={changeSortingColumn}
                >
                  Title
                </Sortable>
              </th>
              <th className="pages-column">Pages</th>
              <th className="modified-column">
                <Sortable
                  column="lastModified"
                  order={order}
                  sortBy={sortBy}
                  onOrderChanged={changeSortingOrder}
                  onColumnChanged={changeSortingColumn}
                >
                  Last Modified
                </Sortable>
              </th>
              <th className="status-column">
                <Sortable
                  column="status"
                  order={order}
                  sortBy={sortBy}
                  onOrderChanged={changeSortingOrder}
                  onColumnChanged={changeSortingColumn}
                >
                  Status
                </Sortable>
              </th>
              <th className="live-column">
                <Sortable
                  column="liveFrom"
                  order={order}
                  sortBy={sortBy}
                  onOrderChanged={changeSortingOrder}
                  onColumnChanged={changeSortingColumn}
                >
                  Live From
                </Sortable>
              </th>
              <th className="ends-column">
                <Sortable
                  column="ends"
                  order={order}
                  sortBy={sortBy}
                  onOrderChanged={changeSortingOrder}
                  onColumnChanged={changeSortingColumn}
                >
                  Ends
                </Sortable>
              </th>
              <th className="actions-column"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              ({ id, title, liveFrom, lastModified, status, endsDate }) => (
                <tr key={id}>
                  <td>
                    <Title title={title} liveFrom={liveFrom} />
                  </td>
                  <td>
                    <Pages />
                  </td>
                  <td>
                    <FormattedDate
                      className="font-size-14"
                      date={lastModified}
                    />
                  </td>
                  <td className="status-cell">
                    <Badge
                      type={
                        status === StoryStatuses.Draft ||
                        status === StoryStatuses.Scheduled
                          ? BadgeTypes.Primary
                          : status === StoryStatuses.Live
                          ? BadgeTypes.Success
                          : BadgeTypes.Default
                      }
                      text={status}
                    />
                  </td>
                  <td>
                    <FormattedDate className="font-size-14" date={liveFrom} />
                  </td>
                  <td>
                    <FormattedDate className="font-size-14" date={endsDate} />
                  </td>
                  <td>
                    <Actions />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination
          page={page}
          nrOfRows={nrOfRows}
          nrOfItems={100}
          onNrOfRowsChanged={changeNrOfRows}
          onPageChanged={changePage}
          onPrevPage={getPrevPage}
          onNextPage={getNextPage}
        />
      </div>
    </div>
  );
}
