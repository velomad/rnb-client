import React from 'react';

const LandingPage = () => {

    return (
        <div class="container mx-auto px-4">
            <section class="py-4 px-4">
                <div class="flex flex-wrap -mx-4">
                    <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                        <img class="rounded shadow-md w-full h-56" src="static/images/clothing.jpg" alt="" />
                    </div>
                    <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                        <img class="rounded shadow-md w-full h-56" src="static/images/electronic.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default LandingPage