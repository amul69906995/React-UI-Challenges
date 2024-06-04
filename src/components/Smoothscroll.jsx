
import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Smoothscroll = () => {
    useEffect(() => {


        Events.scrollEvent.register('begin', (to, element) => {
            
        });

        Events.scrollEvent.register('end', (to, element) => {
            
        });


        scrollSpy.update();


        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);


    //function  for scrolling
    const handleSetActive = (to) => {
        
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const scrollTo = () => {
        scroll.scrollTo(100);
    };

    const scrollMore = () => {
        scroll.scrollMore(100);
    };
    return (
        <div>
            <nav style={{position:'fixed',top:'40px',background:"pink"}}>
                <Link
                    activeClass="active"
                    to="section-1"
                    spy={true}
                    smooth={true}
                    offset={-63}
                    duration={500}
                    onSetActive={handleSetActive}
                >
                  section-1
                </Link>
                <Link
                    activeClass="active"
                    to="section-2"
                    spy={true}
                    smooth={true}
                    offset={-63}
                    duration={500}
                    onSetActive={handleSetActive}
                >
                  section-2
                </Link> <Link
                    activeClass="active"
                    to="section-3"
                    spy={true}
                    smooth={true}
                    offset={-63}
                    duration={500}
                    onSetActive={handleSetActive}
                >
                  section-3
                </Link> <Link
                    activeClass="active"
                    to="section-4"
                    spy={true}
                    smooth={true}
                    offset={-63}
                    duration={500}
                    onSetActive={handleSetActive}
                >
                  section-4
                </Link>
                <a onClick={scrollToTop}>To the top!</a>
                <a onClick={scrollToBottom}>To the bottom!</a>
                <a onClick={scrollTo}>Scroll to 100px from the top</a>
                <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
            </nav>
            <Element id='section-1'>
            <h1 className="section-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, exercitationem?</h1></Element>
           <Element id='section-2'> <h1 className="section-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime perferendis sapiente libero cum fuga culpa a velit obcaecati in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam saepe ipsa aliquid tempore in odio impedit quos veritatis accusamus? Impedit?</h1></Element>
            <Element id='section-3'><h1 className="section-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga repudiandae necessitatibus? Modi numquam nihil iure cum veniam deleniti at blanditiis repellat id culpa, illo repudiandae facere ratione minima quia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto non officiis voluptatum similique, commodi velit eum illum, accusamus id, earum ut maiores laboriosam recusandae rerum nihil. Reprehenderit quisquam saepe aliquam?</h1></Element>
           <Element id='section-4'><h1 className="section-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis, vel corporis doloremque dolor magni cupiditate dolores quo soluta, nobis nesciunt error eaque corrupti odio optio, placeat ex sapiente tempore repudiandae quis molestias impedit. Praesentium quidem libero rerum distinctio iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt doloribus dolorum animi, reprehenderit, molestias, temporibus architecto in molestiae perspiciatis dolor nulla. Perspiciatis fugit unde consectetur rem provident architecto, quo eaque, voluptas non iure nihil fugiat placeat, quidem perferendis dolore.</h1></Element>
        </div>
    )
}

export default Smoothscroll
