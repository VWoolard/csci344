import React, { useState } from "react";
import NavBar from "./NavBar";
import MyDrawer from "./MyDrawer";
import MyCarousel from "./MyCarousel";
import { ColorPicker , TimePicker, Carousel , Image , Drawer , Button , Card , Space , Col , Row } from 'antd';

// custom components:
export default function App() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <ColorPicker defaultValue="#1677ff" />
                <MyDrawer />
                <h2 className="font-Comfortaa my-4 font-bold text-xl">


{/* Photo Gallery */}
     Photo Gallery
 </h2>
 <div className="flex flex-wrap content-start">
     <Image
         src="https://picsum.photos/600/600?id=1"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=2"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=3"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=4"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=5"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=6"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=7"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=8"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=9"
         width={200}
     />
     <Image
         src="https://picsum.photos/600/600?id=10"
         width={200}
     />
 </div>

{/* Cards */}
 <Row gutter={16}>
    <Col span={8}>
      <Card title="Conversation Starters" variant="borderless">
        Eek! There's a wasp
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Conversation Starters" variant="borderless">
        You ever been to the zoo?
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Conversation Starters" variant="borderless">
        Ya like jazz?
      </Card>
    </Col>
  </Row>


{/* Carousel */}
<MyCarousel />
  
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
