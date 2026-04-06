import SubmitButton from "../../../components/Button/SubmitButton"
import FloatingLabelInput from "../../../components/input/FloatingLabelInput"


const AddGender = () => {
    return (
        <>
            <form>

                <div className="mb-4">

                    <FloatingLabelInput
                        type="text"
                        label="Gender"
                        name="gender"
                    />
                </div>
                <div className="flex-justify-end">
                    <SubmitButton label="Save Gender" />
                </div>
            </form>

        </>
    )
}

export default AddGender