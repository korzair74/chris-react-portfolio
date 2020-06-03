import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faEdit,
  faSignOutAlt,
  faSpinner,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faPlusCircle,
    faTrash,
    faEdit,
    faSignOutAlt,
    faSpinner,
    faPhone,
    faEnvelope,
    faLock,
    faMapMarkedAlt
  );
};

export default Icons;
