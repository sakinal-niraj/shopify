// import React from 'react'
// import { useAppDispatch } from '../redux/hooks';

// interface SubData{
//     isMenubar:boolean,
// }
// const  SubMenu: React.FC<SubData> = ({isMenubar}) =>{
//     const dispatch = useAppDispatch();
//   return (
//     <div>
//        <div
//                     className={`fixed top-12 right-0 z-40 h-screen  overflow-y-auto transition-transform bg-white w-[83%] duration-500 ${
//                       isMenubar
//                         ? "block"
//                         : "hidden"
//                     }`}
//                     role="dialog"
//                     aria-labelledby="drawer-right-label"
//                   >
//                     <div
//                                             className={`flex gap-2 w-full ${
//                                               isMenubar
//                                                 ? "block"
//                                                 : "hidden"
//                                             }`}
//                                           >
//                                             <button
//                                               className={`${.contentType === 'marquee' ? 'bg-black text-white' : 'bg-white text-black'} w-full flex items-center  justify-center cursor-pointer transition-transform active:translate-y-0.5 h-20 border border-black rounded-md`}
//                                               onClick={() => {
//                                                 dispatch(
//                                                   updateAnnouncementType({
//                                                     sectionId: section.id,
//                                                     subSectionId: subSection.id,
//                                                     type: "marquee",
//                                                   })
//                                                 );
//                                               }}
//                                             >
//                                               Marquee
//                                             </button>
//                                             <button
//                                               onClick={() => {
//                                                 dispatch(
//                                                   updateAnnouncementType({
//                                                     sectionId: section.id,
//                                                     subSectionId: subSection.id,
//                                                     type: "slider",
//                                                   })
//                                                 );
//                                               }}
//                                               className={`${section.contentType === 'slider' ? 'bg-black text-white' : 'bg-white text-black'} w-full flex items-center justify-center cursor-pointer transition-transform active:translate-y-0.5 h-20 border border-black rounded-md`}
//                                             >
//                                               Slider
//                                             </button>
//                                           </div>
//                   </div>
//     </div>
//   )
// }

// export default SubMenu
