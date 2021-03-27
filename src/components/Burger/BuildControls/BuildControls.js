import { checkPropTypes } from 'prop-types';
import BuildControl from './BuildControl/BuilControl'
import styles from './BuildControls.module.css'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
];

const BuildControls = (props) => {

    return(
        <div className={styles.BuildControls}>
            Select your ingredients:
            
            {
                controls.map( ctrl => 
                    <BuildControl
                        key = {ctrl.label}
                        label = {ctrl.label}
                        added = { () => props.ingredientAdded(ctrl.type)} 
                        removed = { () => props.ingredientRemoved(ctrl.type)} 
                    />
                )
            }

        </div>
    )
}


export default BuildControls;