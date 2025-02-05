import Image from "next/image";
import { useAppSelector } from "../redux/hooks";
import logo from "@/public/images/t-shirt.jpg";
import { FaFacebook } from "react-icons/fa";



import {
  selectStoreDetails,
  selectStoreImg,
  selectStoreName,
  selectStoreSocialMedia,
} from "../redux/selectors/categorySelector";
import { FaInstagram, FaPinterest, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  // selector
  const storeName = useAppSelector(selectStoreName);
  const storeDetails = useAppSelector(selectStoreDetails);
  const storeSocialMedia = useAppSelector(selectStoreSocialMedia);
  const storeImg = useAppSelector(selectStoreImg);
  console.log(storeImg);
  return (
    <div className="footer w-full">
      <div className="px-10 pt-10 pb-5 flex justify-center">
        <div className="max-w-[1080px]   2xl:w-[1800px] w-full flex justify-between">
          {/* left side */}
          <div className={`flex flex-col`}>
            {/* logo */}
            <div className="flex items-center gap-3">
              {
                <div className="mt-2 aspect-h-5">
                  <Image
                    src={storeImg || logo}
                    alt="Current store"
                    width={100}
                    height={100}
                    className="max-w-16 max-h-10 object-cover rounded-md mb-2.5"
                  />
                </div>
              }
              <h2 className="mr-3 mb-1 text-xl hover:text-black">
                {storeName}
              </h2>
            </div>
            <div>
              <ul className="text-black pl-0.5 max-w-[300px] w-full">
                {storeDetails}
              </ul>
            </div>
          </div>

          {/* right side */}
          <div className="grid grid-cols-2">
            <div className="space-y-5">
              <h1 className="font-bold text-black">Social Media links</h1>
              <ul className="text-black pl-0.5 flex flex-col gap-y-2">
                {storeSocialMedia[0] && <li className="hover:text-blue-950"><a className="flex items-center gap-1" href={storeSocialMedia[0]}><FaFacebook />Facebook</a></li>}
                {storeSocialMedia[1] && <li className="hover:text-blue-950"><a className="flex items-center gap-1" href={storeSocialMedia[1]}><FaWhatsapp />Whatsapp</a></li>}
                {storeSocialMedia[2] && <li className="hover:text-blue-950"><a className="flex items-center gap-1" href={storeSocialMedia[2]}><FaInstagram />Instagram</a></li>}
                {storeSocialMedia[3] && <li className="hover:text-blue-950"><a className="flex items-center gap-1" href={storeSocialMedia[3]}><FaPinterest />Pinterest</a></li>}
                {storeSocialMedia[4] && <li className="hover:text-blue-950"><a className="flex items-center gap-1" href={storeSocialMedia[4]}><FaXTwitter />Twitter</a></li>}
              </ul>
            </div>
            <div className="flex gap-2">
              <div className="w-11 h-11  text-black p-[1px] rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className="fs-40 semi-border p-1 text-[40px] bg-white rounded-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M105.72,215v41.25h57.1a49.66,49.66,0,0,1-21.14,32.6c-9.54,6.55-21.72,10.28-36,10.28-27.6,0-50.93-18.91-59.3-44.22a65.61,65.61,0,0,1,0-41l0,0c8.37-25.46,31.7-44.37,59.3-44.37a56.43,56.43,0,0,1,40.51,16.08L176.47,155a101.24,101.24,0,0,0-70.75-27.84,105.55,105.55,0,0,0-94.38,59.11,107.64,107.64,0,0,0,0,96.18v.15a105.41,105.41,0,0,0,94.38,59c28.47,0,52.55-9.53,70-25.91,20-18.61,31.41-46.15,31.41-78.91A133.76,133.76,0,0,0,205.38,215Zm389.41-4c-10.13-9.38-23.93-14.14-41.39-14.14-22.46,0-39.34,8.34-50.5,24.86l20.85,13.26q11.45-17,31.26-17a34.05,34.05,0,0,1,22.75,8.79A28.14,28.14,0,0,1,487.79,248v5.51c-9.1-5.07-20.55-7.75-34.64-7.75-16.44,0-29.65,3.88-39.49,11.77s-14.82,18.31-14.82,31.56a39.74,39.74,0,0,0,13.94,31.27c9.25,8.34,21,12.51,34.79,12.51,16.29,0,29.21-7.3,39-21.89h1v17.72h22.61V250C510.25,233.45,505.26,220.34,495.13,211ZM475.9,300.3a37.32,37.32,0,0,1-26.57,11.16A28.61,28.61,0,0,1,431,305.21a19.41,19.41,0,0,1-7.77-15.63c0-7,3.22-12.81,9.54-17.42s14.53-7,24.07-7C470,265,480.3,268,487.64,273.94,487.64,284.07,483.68,292.85,475.9,300.3Zm-93.65-142A55.71,55.71,0,0,0,341.74,142H279.07V328.74H302.7V253.1h39c16,0,29.5-5.36,40.51-15.93.88-.89,1.76-1.79,2.65-2.68A54.45,54.45,0,0,0,382.25,158.26Zm-16.58,62.23a30.65,30.65,0,0,1-23.34,9.68H302.7V165h39.63a32,32,0,0,1,22.6,9.23A33.18,33.18,0,0,1,365.67,220.49ZM614.31,201,577.77,292.7h-.45L539.9,201H514.21L566,320.55l-29.35,64.32H561L640,201Z"></path>
                </svg>
              </div>
              <div className="w-11 h-11  text-black p-[1px] rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="fs-40 semi-border p-1 text-[40px] bg-white rounded-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.436 0l-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24zM14.26 10.098L3.389 17.166 1.564 24h9.008l3.688-13.902Z"></path>
                </svg>
              </div>
              <div className="w-11 h-11  text-black p-[1px] rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="fs-40 semi-border p-1 text-[40px] bg-white rounded-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.2215 15.7683L21.9974 14.6431L19.4831 14.6431L19.0837 15.7599L17.0677 15.7643C18.3633 12.6514 19.3247 10.3455 19.952 8.84657C20.1159 8.45511 20.4072 8.25543 20.8364 8.25848C21.1638 8.26094 21.6991 8.26124 22.4421 8.25942L24 15.7648L22.2215 15.7683ZM20.0485 13.1018H21.6692L21.0642 10.2819L20.0485 13.1018ZM7.06069 8.2567L9.08703 8.25933L5.95498 15.7683L3.90367 15.7675C3.21013 13.0896 2.70084 11.1042 2.37581 9.81122C2.27616 9.4148 2.07796 9.13797 1.69702 9.00705C1.35736 8.89031 0.791683 8.7098 0 8.46553V8.25942C1.48023 8.25924 2.55921 8.25924 3.23694 8.25942C3.7974 8.25959 4.12411 8.53015 4.22922 9.08566C4.33473 9.6435 4.60127 11.0616 5.02884 13.3398L7.06069 8.2567ZM11.8702 8.25934L10.2695 15.7676L8.34108 15.7648C8.37914 15.5824 8.91202 13.0797 9.93972 8.2567L11.8702 8.25934ZM15.7815 8.12012C16.3578 8.12012 17.0846 8.2992 17.5035 8.46553L17.1652 10.0221C16.7871 9.87023 16.1657 9.66491 15.6424 9.67294C14.8813 9.68462 14.4117 10.004 14.4117 10.3105C14.4117 10.808 15.2277 11.0586 16.0681 11.603C17.0265 12.2237 17.1531 12.78 17.1412 13.3856C17.1277 14.6413 16.0681 15.8801 13.8322 15.8801C12.8111 15.8648 12.4444 15.7791 11.6122 15.4839L11.9637 13.8595C12.8106 14.2142 13.1698 14.327 13.8935 14.327C14.5569 14.327 15.1263 14.0589 15.1312 13.5919C15.1347 13.2598 14.9316 13.0955 14.1871 12.6847C13.4427 12.2739 12.3994 11.706 12.4128 10.5631C12.43 9.10074 13.815 8.12012 15.7815 8.12012Z"></path>
                </svg>
              </div>
              <div className="w-11 h-11  text-black p-[1px] rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="fs-40 semi-border p-1 text-[40px] bg-white rounded-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001 6.65407C13.5816 7.89878 14.5965 9.82972 14.5965 11.9977C14.5965 14.1657 13.5816 16.0966 12.001 17.3413C10.4204 16.0966 9.40547 14.1657 9.40547 11.9977C9.40547 9.82972 10.4204 7.89878 12.001 6.65407ZM11.1316 6.0717C9.46024 7.50229 8.40098 9.62742 8.40098 12C8.40098 14.371 9.45891 16.4949 11.1285 17.9255C10.1444 18.4795 9.00847 18.7955 7.79873 18.7955C4.04443 18.7955 1.00098 15.752 1.00098 11.9977C1.00098 8.24341 4.04443 5.19995 7.79873 5.19995C9.00976 5.19995 10.1468 5.51663 11.1316 6.0717ZM12.8735 17.9255C14.543 16.4949 15.601 14.371 15.601 12C15.601 9.62742 14.5417 7.50229 12.8703 6.0717C13.8551 5.51663 14.9922 5.19995 16.2032 5.19995C19.9575 5.19995 23.001 8.24341 23.001 11.9977C23.001 15.752 19.9575 18.7955 16.2032 18.7955C14.9935 18.7955 13.8576 18.4795 12.8735 17.9255Z"></path>
                </svg>
              </div>
              <div className="w-11 h-11  text-black p-[1px] rounded-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className="fs-40 semi-border p-1 text-[40px] bg-white rounded-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
