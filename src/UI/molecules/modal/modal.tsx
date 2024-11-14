import Overlay from "@/UI/atoms/overlay/overlay";
import FormCreateServices from "@/UI/organisms/formcreate/formcreate";

interface IProps {
    onClose:()=>void
    projectID?: number;
}


const FormModalCreate = ({onClose,projectID}:IProps)=>{
    return (
        <Overlay>
            <FormCreateServices closeModal={onClose}/>
        </Overlay>
    )
}

export default FormModalCreate