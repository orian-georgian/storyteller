import { Button } from "../../../../components";

import { ReactComponent as Edit } from "../../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../../assets/icons/delete.svg";

export default function Actions() {
  return (
    <div className="flex-box align-center gap-20">
      <Button icon={<Delete />} variant="danger" type="outlined" />
      <Button icon={<Edit />} text="Edit" variant="success" />
    </div>
  );
}
