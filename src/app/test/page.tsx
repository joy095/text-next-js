import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <Image src="/img.jpg" alt="" height={200} width={300} />
            <Image
                src="https://images.unsplash.com/photo-1740507619572-ac180ca2630f?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                height={200}
                width={300}
            />
        </div>
    );
};

export default page;
