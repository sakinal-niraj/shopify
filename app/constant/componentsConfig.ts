// constants/componentsConfig.ts
import { TbSection } from 'react-icons/tb';
import { CiSettings } from 'react-icons/ci';
// import NavBar from '../components/NavBar';
import UndoRedoButtons from '../components/UndoRedoButtons';
import { NavBar } from '../pages/homeComponents/bodyContent/BodyComponents';
import { IconType } from 'react-icons';

interface ComponentConfig {
    name: string;
    icon?: IconType; // Replace `IconType` with the correct type for your icons
    component: React.ComponentType;
  }
  
  export const componentsConfig: { [key: number]: ComponentConfig } = {
    1: { name: "Section", icon: TbSection, component: NavBar },
    2: { name: "Settings", icon: CiSettings, component: UndoRedoButtons },
  };















  // (props: { sideHead: SidebarData }) {
  //   // const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  //   // const { sideHead } = props;
  
  //   // const { id, name } = sideHead;
  
  //   // const { attributes, listeners, setNodeRef, transform, transition } =
  //   // useSortable({ id });
  
  //   // const style = {
  //   //   transform: CSS.Transform.toString(transform),
  //   //   transition,
  //   };