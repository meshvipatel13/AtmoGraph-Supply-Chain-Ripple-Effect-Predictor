import styles from "./GraphToolbar.module.css";

import {

RotateCcw,

Download,

Settings2

} from "lucide-react";

const GraphToolbar=()=>{

return(

<div className={styles.toolbar}>

<button>

<RotateCcw size={18}/>

</button>

<button>

<Download size={18}/>

</button>

<button>

<Settings2 size={18}/>

</button>

</div>

)

}

export default GraphToolbar;