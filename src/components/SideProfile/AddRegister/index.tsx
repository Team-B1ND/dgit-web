import { Plus } from "@b1nd/dds-web";
import { AddRegister, RegisterBox, SideProfileInfo } from "../style";
import useModal from "hooks/util/useModal";
import Register from "components/common/Register";

const AddRegisterItem = () => {
    const { close, isOpen, open } = useModal();

    return(
        <>
        <RegisterBox  onClick={open}>
            
                <AddRegister>
                    <Plus size={20} color="labelNormal"/>
                    <span>REGISTER</span>
                </AddRegister>
            
        </RegisterBox>
        <Register
        isOpen={isOpen}
        close={close}
        />
        </>
    )
}

export default AddRegisterItem;