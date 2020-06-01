import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faEdit,
  faSignOutAlt,
  faSpinner,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faPlusCircle, faTrash, faEdit, faSignOutAlt, faSpinner);
};

export default Icons;
