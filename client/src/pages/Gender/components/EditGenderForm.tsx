import BackButton from "../../../components/Button/BackButton"
import SubmitButton from "../../../components/Button/SubmitButton"
import FloatingLabelInput from "../../../components/input/FloatingLabelInput"


const EditGenderForm = () => {
    return (
        <>
            <form>

                <div className="mb-4">
                    <FloatingLabelInput
                        label="Gender"
                        type="text"
                        name="gender"
                    >
                    </FloatingLabelInput>
                </div>

                <div className="flex justify-end gap-2">
                    <BackButton label="Back" path="/"></BackButton>
                    <SubmitButton
                        label="Save Gender"
                    >

                    </SubmitButton>
                </div>

            </form>
        </>
    )
}

export default EditGenderForm