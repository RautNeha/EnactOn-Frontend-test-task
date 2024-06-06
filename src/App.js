import * as React from "react";
import './App.css';


function MyComponent() {
  return (
    <div className="flex flex-col bg-stone-950">
      <img
        loading="lazy"
        src="./assets/slide4_image 1.png"
        className="ml-[50px] w-[1440px] aspect-[1.28] max-md:max-w-0 h-[900px]"
        alt=""
      />
      <button className="absolute left-[56%] transform -translate-x-1/2 bottom-4 text-white text-2xl  px-4 py-2  border-4 border-white bg-transparent h-[76px] w-[359px]">
      Meet Chef Matt</button>
      <img
    loading="lazy"
    src="./assets/Group 1.png"
    className="absolute left-[56%] transform -translate-x-1/2 bottom-[-140px]"
    alt=""
  />
      <img
            loading="lazy"
            src="./assets/Group 39.png"
            //className="mt-14 max-w-full aspect-[3.7] w-[720px] max-md:mt-10"
            className="fixed top-0 left-0 w-[199px] h-[900px] object-cover ml-[50px]"
            alt=""
          />
          
           <img onclick="toggleButton()" loading="lazy" src="./assets/Group 37.png" className="fixed top-0 left-0 w-[345px] h-[900px] object-cover ml-[0px]" alt=""/>

          <button id="revealButton" onclick="toggleButton()" className="fixed top-[45px] left-[95px] px-4 py-3 transition duration-300 hover:bg-transparent hover:text-blue-500">
          </button> 
        <div className="">
      <img
        src="./assets/—Pngtree—five thai sweet basil leaves_4231023 1.png"
        alt=""
        style={{ marginLeft: '200px' }}
        className="object-cover"
      />
      <div>
      <p
        style={{
          marginLeft: '200px',
          color: '#D29A5A',
          width: '572px',
          height: '57px',
          fontWeight: 'bold',
          fontSize: '40px'
        }}
      >
        CHEF MATT PRODUCTS
      </p>
      <hr className="w-full border-0" style={{ marginLeft: '200px', height: '4px', width: '572px', backgroundColor: '#D29A5A' }} />
    </div>
    </div> 
      <div className="flex flex-col self-center px-5 mt-3 w-full max-w-[1282px] max-md:max-w-full ml-[20px]">
        <div className="self-start ml-8 text-lg text-white max-md:max-w-full ml-[70px]">
          Shop Gourmet Chef Quality products from the Chef Matt brand. <br />
          Chef it yourself and Thank us later.
        </div>
        <div className="self-center mt-20 w-full max-md:mt-10 max-md:max-w-full ml-[70px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3.5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4bc9e30b4aac25f813b2054ce05c078ea9589e1c97fd04c75d769e6f66c547?"
                  className="shrink-0 my-auto aspect-[0.99] w-[76px]"
                  alt=""
                />
                <div className="flex flex-wrap justify-between max-md:w-full max-md:items-center">
                <img
                  loading="lazy"
                  src="./assets/Ellipse 5.png"
                  className="rounded-full grow shrink-0 max-w-full aspect-[0.75] w-[234px] h-[234px] max-md:mt-10"
                  alt=""
                />
                <div style={{
          textAlign: "center",
          color: '#D29A5A',
          width: '234px',
          height: '234px',
        }}>
        CINNAMON HONEY<br />
        <p
        style={{
          textAlign: "center",
          color: 'white',
          width: '234px',
          height: '234px',
        }}
      >
        <span style={{ textDecoration: 'line-through' }}>$12.00</span> $9.00
      </p>
                </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="./assets/Ellipse 6.png"
                className="rounded-full grow shrink-0 max-w-full aspect-[0.75] w-[234px] h-[234px] max-md:mt-10"
                alt=""
              />
              <div style={{
          textAlign: "center",
          color: '#D29A5A',
          width: '234px',
          height: '234px',
        }}>
        COCONUT OIL<br />
        <p
        style={{
          textAlign: "center",
          color: 'white',
          width: '234px',
          height: '234px',
        }}
      >
        <span style={{ textDecoration: 'line-through' }}>$20.00</span> $15.00
      </p>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="./assets/Ellipse 7.png"
                className="rounded-full grow shrink-0 max-w-full aspect-[0.75] w-[234px] h-[234px] max-md:mt-10"
                alt=""
              />
              <div style={{
          textAlign: "center",
          color: '#D29A5A',
          width: '234px',
          height: '234px',
        }}>
        MANGO HONEY<br />
        <p
        style={{
          textAlign: "center",
          color: 'white',
          width: '234px',
          height: '234px',
        }}
      >
        <span style={{ textDecoration: 'line-through' }}>$9.00</span> $6.00
      </p>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3.5 max-md:mt-10">
              <div>
                <img
                  loading="lazy"
                  src="./assets/Ellipse 7.png"
                  className="rounded-full grow shrink-0 max-w-full aspect-[0.75] w-[234px] h-[234px] max-md:mt-10"
                  alt=""
                />
                <div style={{
          textAlign: "center",
          color: '#D29A5A',
          width: '234px',
          height: '234px',
        }}>
        HONEY HABANERO<br />
        <p
        style={{
          textAlign: "center",
          color: 'white',
          width: '234px',
          height: '234px',
        }}
      >
        <span style={{ textDecoration: 'line-through' }}>$12.00</span> $9.00
      </p>
                </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0a81dda9aca7e1db5ad97c52074f416cee94ca0379791efa5dbe44182219c9?"
                  className="shrink-0 my-auto aspect-[0.99] w-[76px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
  <div className="items-center justify-center">
    <p className="absolute top-[20px] left-[50%] text-black px-4 py-2 w-[234px] h-[57px] text-2xl">ONLINE ONLY </p>
  <div className="items-center justify-center">
 
    <p className="absolute top-[100px] left-[40%] text-black px-4 py-2 w-[455px] h-[66px] text-xl">
    GET 20% OFF YOUR ORDER OF $50 OR MORE<br/>
    <span className="absolute left-[30%]">Use code <b>"Chef20"</b></span></p>
  </div>  
    <button className="absolute bottom-[70px] left-[40%] text-black px-4 py-2 border-black border-2 w-[359px] h-[76px]">Shop Now</button>
  </div>
  <img
    loading="lazy"
    src="./assets/Rectangle 7.jpg"
    className="ml-[67px] w-full aspect-[3.33] max-md:mt-10 max-md:max-w-full w-[1282px] h-[383px]"
    alt=""
  />
</div>
<div class="mt-10 w-[1282px] h-[460px] flex flex-col ml-[30px]">
  <div class="flex justify-between">
    <img
      loading="lazy"
      src="./assets/Group 5.png"
      class="w-[641px] h-[230px]"
      alt=""
    />
    <img
      loading="lazy"
      src="./assets/Mask Group.png"
      class="w-[641px] h-[230px]"
      alt=""
    />
  </div>
  <div class="flex justify-between">
    <img
      loading="lazy"
      src="./assets/Rectangle 13.png"
      class="w-[641px] h-[230px]"
      alt=""
    />
    <img
      loading="lazy"
      src="./assets/Rectangle 14.png"
      class="w-[641px] h-[230px]"
      alt=""
    />
  </div>
</div>
        <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 mt-8 w-full min-h-[401px] max-md:px-5 max-md:mt-10 max-md:max-w-full ml-[70px]">
          <img
            loading="lazy"
            src="./assets/Rectangle 16.jpg"
            //className="mt-14 max-w-full aspect-[3.7] w-[720px] max-md:mt-10"
            className="w-[1282px] h-[401px]"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a7de28cc3b943db3476d027e79cd919c85ce92242dc054abd2d776b68bbe6a?"
            //className="mt-14 max-w-full aspect-[3.7] w-[720px] max-md:mt-10"
            className="absolute object-cover mt-14 max-w-full w-[720px] h-[191px] max-md:mt-10"
            alt=""
          />
        </div>
        <div className="flex gap-5 justify-between self-center mt-5 w-full max-w-[1165px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full ml-[70px]">
          <div className="flex flex-col self-start">
            <div className="flex gap-5 text-2xl text-orange-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48d6256103a64e99cfa7a522d73aa4f03541adea73b8e51ca57fb968f8c2cb42?"
                className="shrink-0 w-9 border-4 border-orange-400 border-solid aspect-[1.12] stroke-[4px] stroke-orange-400"
                alt=""
              />
              <div className="flex-auto my-auto">FREE SHIPPING WORLDWIDE</div>
            </div>
            <div className="self-center mt-5 text-lg text-white">
              Guaranteed Delivery
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f97f57e2494d1313d318997dd234f1c1bff90ee8978cc85513590a0b9f2369?"
              className="shrink-0 border-4 border-orange-400 border-solid aspect-[1.03] stroke-[4px] stroke-orange-400 w-[35px]"
              alt=""
            />
            <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 w-fit">
              <div className="text-2xl text-orange-400">
                24/7 CUSTOMER SERVICE
              </div>
              <div className="mt-5 text-lg text-white">
                Text Us 24/7 at 070-7782-9137
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e616d98e85f5ad5581db5c8a183c9fe788304749cd0f458c1b427828868be0aa?"
              className="shrink-0 w-10 border-4 border-orange-400 border-solid aspect-square stroke-[4px] stroke-orange-400"
              alt=""
            />
            <div className="flex flex-col mt-3">
              <div className="text-2xl text-orange-400">QUALITY GUARANTEE!</div>
              <div className="mt-6 text-lg text-white">Send Within 30 Days</div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10">
      <hr className="w-full border-0 ml-[46px]" style={{ height: '8px', backgroundColor: '#D29A5A' }} />
    </div>

        <img
          loading="lazy"
          src="./assets/sign.png"
          className="self-center mt-[-20px] max-w-full aspect-[1.69] w-[447px] h-[200px]"
          alt=""
        />
      </div>
    </div>
  );
}



export default MyComponent;
