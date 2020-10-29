import React, {useState, useEffect} from "react";
import { Holder, Icon, Modal, CloseIcon} from "../styles/BreweryDisplayStyle";
import { Bold } from '../styles/GlobalStyle';
import { useSelector, useDispatch } from "react-redux";
import { selectBrewery, activateBrewery } from "../features/activeBrewerySlice";
import { hideSearch } from '../features/showSearchFormSlice';
import { Redirect } from 'react-router-dom';
import { barCrawl } from "../features/barCrawlSlice";


function MapModal(props) {
    const activeBrew = useSelector(selectBrewery);
    const dispatch = useDispatch();

    const [MapData, setMapData] = useState({
        brewery: props.brewery,
        show: false
    })
    const [redirect, setRedirect] = useState(false);

    //Toggle the modal on selecting new active brewery from list
    useEffect(() => {
        let showVar = ((props.brewery.id === activeBrew.id) ? true : false);
        setMapData({
            brewery: props.brewery,
            show: showVar
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeBrew])

    const barCrawlList = useSelector(barCrawl);
    
    useEffect(() => {
        console.log("newList!!!!")
        setMapData({
            brewery: props.brewery,
            show: false
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [barCrawlList]);

    let isActiveBrewery = (MapData.brewery.id === activeBrew.id);

    //Show will allow forced turn on for the modal;    
    const toggleModal = (show = "default") => {
        let showVar = (show === "show" ? true : !MapData.show)
        setMapData({
            brewery: props.brewery,
            show: showVar
        })
    }

    const handleIconClick = (e) => {
        if (isActiveBrewery) {
            toggleModal();
        } else {
            dispatch(activateBrewery(MapData.brewery));
            toggleModal("show");
        }
    }
    

    
    let IconURL;
    switch(MapData.brewery.brewery_type) {
        case "micro":
            IconURL = "./beer-mug_1f37a.png";
            break;
        case "regional":
            IconURL = "./triangular-flag-on-post_1f6a9.png";
            break;
        case "brewpub":
            IconURL = "./fork-and-knife-with-plate_1f37d.png";
            break;
        case "large":
            IconURL = "./factory_1f3ed.png";
            break;
        case "contract":
        case "proprietor":
            IconURL = "./clinking-beer-mugs.png";
            break;
        default:
            IconURL = "./beer-mug_1f37a.png";
            break;
    }

    return(
        <Holder>
            <Icon 
                src={IconURL} 
                onClick={handleIconClick} 
                className={isActiveBrewery ? "light" : null}
                />
            {MapData.show ? 
            <Modal onDoubleClick={() => {dispatch(hideSearch()); setRedirect(true); }}>
                <Holder className="row">
                    <Bold>{MapData.brewery.name}</Bold>
                    <CloseIcon onClick={toggleModal}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </CloseIcon>
                </Holder>
                <a href={MapData.brewery.website_url} target="_blank" rel="noreferrer">{MapData.brewery.website_url.replace("http://","")}</a>
            </Modal>
            : null }
            { redirect && <Redirect to={`/show/${activeBrew.name.split(' ').join('')}`} />}
        </Holder>
    )
}

export default MapModal;