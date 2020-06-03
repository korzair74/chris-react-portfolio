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
    faMapMarkedAlt
  );
};

export default Icons;
