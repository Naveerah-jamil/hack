import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

export default function Products() {
  return (
    <div className=" bg-white">
      {/* Main Container */}
      
      <div className="w-[1920px] h-[461px] top-[260px] bg-white">
        {/* Title Section */}
        <div className="w-[1920px] h-[44px] flex justify-between pl-[300px] pr-[300px]">
          <div className="w-[188px] h-[35px]">
            <p className="font-Inter font-[600] text-[32px] leading-[35.5px] text-[#272343]">
              All Products
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex justify-between pl-[300px] pr-[300px] gap-[20px] mt-[40px]">
          {/* Product 1 */}
          <div className="w-[312px] h-[377px] relative">
            
            <div className="rounded-[6px]">
              <Image
                src="/assets/image.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A] ">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    New
                </p>
            </div>
            </div>
            
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
          

          {/* Product 2 */}
          <div className="w-[312px] h-[377px] relative">
            <div className=" w-[312px] h-[312px] [rounded-[6px]">
              <Image
                src="/assets/image10.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F] ">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    sales
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image3.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image4.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
        </div>
        {/* 2nd div */}
        
        {/* Products Section */}
        <div className="flex justify-between pl-[300px] pr-[300px] gap-[20px] mt-[40px] bg-white">
          {/* Product 1 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image5.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A] ">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    New
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image6.png"
                alt="loading"
                width={312}
                height={312}
              />
               <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F] ">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    sales
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image7.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image8.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="flex justify-between pl-[300px] pr-[300px] gap-[20px] mt-[40px] bg-[white]">
          {/* Product 1 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image9.png"
                alt="loading"
                width={312}
                height={312}
              />
              <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A] ">
                <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    New
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image10.png"
                alt="loading"
                width={312}
                height={312}
              />
              
               <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F] ">
                <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
                    sales
                </p>
            </div>
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image3.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[312px] h-[377px] relative">
            <div className="rounded-[6px]">
              <Image
                src="/assets/image12.png"
                alt="loading"
                width={312}
                height={312}
              />
            </div>
            <div className="w-[256px] h-[51px] mt-[10px]">
              <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
                Library Stool Chair
              </p>
              <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
            </div>
            <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
              <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
            </div>
          </div>
        </div>
{/* Footer Section */}
<div className="relative w-full h-auto pt-[100px] pb-[100px] px-[300px] gap-[70px] bg-gray-100">
  <div className="max-w-screen-xl mx-auto h-auto flex flex-col items-center gap-16">
    
    {/* Newsletter Section */}
    <div className="w-full max-w-[760px] text-center">
      <h2 className="font-roboto text-[50px] font-medium leading-[58.59px]">
        Or Subscribe to the Newsletter
      </h2>
      
    </div>
    
    {/* Instagram Follow Section */}
    <div className="w-full max-w-[1324px] text-center">
      <h2 className="font-roboto text-[50px] font-medium leading-[58.59px]">
        Follow Products and Discounts on Instagram
      </h2>
    </div>
    
    {/* Image Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[24px] mt-[50px]">
      {/* Individual Image Cards */}
      {Array(6).fill("").map((_, index) => (
        <div key={index} className="w-[186px] h-[186px] rounded-[6px] overflow-hidden">
          <Image
            src="/assets/image1.png"
            alt={`Instagram Product ${index + 1}`}
            width={186}
            height={186}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
      
</div>
      </div>


      

</div>







  );
}
