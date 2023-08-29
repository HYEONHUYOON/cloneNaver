import '../../../../css/Body/body-left-news.scss'
import Stand from './foot-Bar-Modules/stand'
import Edit from './foot-Bar-Modules/edit'
import Enter from './foot-Bar-Modules/enter'
import Sports from './foot-Bar-Modules/sports'
import Economic from './foot-Bar-Modules/economic'

const FootBar = ({state,pageNum,pageUp,pageDown})=>{
    const Greeting = (state)=>{
        switch(state){
            case 'Stand' : return <Stand pageNum = {pageNum} pageUp = {pageUp} pageDown = {pageDown}/>;
            case 'Edit' : return <Edit pageNum = {pageNum} pageUp = {pageUp} pageDown = {pageDown}/>;
            case 'Enter' : return <Enter pageNum = {pageNum} pageUp = {pageUp} pageDown = {pageDown}/>;
            case 'Sports' : return <Sports pageNum = {pageNum} pageUp = {pageUp} pageDown = {pageDown}/>;
            case 'Economic' : return <Economic pageNum = {pageNum} pageUp = {pageUp} pageDown = {pageDown}/>;
            default : break;
        }
    }

    return(
        <div id = 'foot-Bar'>
            {
                Greeting(state)
            }
        </div>
    )
}

export default FootBar