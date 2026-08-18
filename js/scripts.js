window.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.querySelector('#filter-container');
    const galleryContainer = document.querySelector('#gallery-container');

    //filtering logic
    const filterImages= (event) => {
        document.querySelectorAll('.filter-element').forEach((element) => {
            element.classList.remove('filter-active');
        });
        event.target.classList.add('filter-active');

        document.querySelectorAll('.gallery-image').forEach((element) => {
            //list = element.dataset.category.split(',');
            //console.log(list);
            list=element.dataset.category.split(',');
            //console.log(list);
            //console.log(event.target.id);
            //console.log(list.includes(event.target.id));
            if ( ( list.includes(event.target.id)===false ) & (event.target.id!=='all') ) {
                element.classList.add('hide-image');
            }
            else {
                element.classList.remove('hide-image');
            }
        });
    };

    categories.forEach((element) => {
        const domElement = document.createElement('span');
        domElement.innerText = element.name;
        domElement.classList.add('filter-element');

        if (element.filter==='all') {
            domElement.classList.add('filter-active');
        }

        domElement.id=element.filter; //idk
        domElement.addEventListener('click', filterImages);

        filterContainer.appendChild(domElement);
    });

    //
    images.forEach((element) => {
        const domElement = document.createElement('img');
        domElement.src= element.src ;
        domElement.dataset.category=element.tags;
        domElement.classList.add('gallery-image');
    /** */
        if (domElement.complete) {
        domElement.classList.add('loaded');
        } else {
        // If not loaded yet, wait for it to load
        domElement.onload = function() {
            domElement.classList.add('loaded');
        };
    }/***/

        galleryContainer.appendChild(domElement);
        //console.log(element.tags);
        //console.log(domElement.dataset.category );
    });

    

});