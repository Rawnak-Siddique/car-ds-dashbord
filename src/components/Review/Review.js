import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { ReviewBody, ReviewBodyFormSection, ReviewBodyFormSectionInput, ReviewBodyFormSectionLabel, ReviewBodyFormTextArea, ReviewBodyHeader, ReviewBodySection } from './styles'

const useStyles = makeStyles(() => ({
    button: {
        background: '#2196F3',
        border: 0,
        borderRadius: 10,
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    textField: {
        width: "350px",
        height: "85%",
        background: "#fafafa",
        color: "#2196F3",
        borderRadius: "10px",
    },
}));
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Submit sent" ,data);
    }
    console.log(errors);
    const classes = useStyles();
  return (
    <ReviewBody>
        <ReviewBodyHeader>Add a new review</ReviewBodyHeader>
        <ReviewBodySection>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ReviewBodyFormSection>
                    <ReviewBodyFormSectionLabel>
                        Email
                    </ReviewBodyFormSectionLabel>
                    <ReviewBodyFormSectionInput>
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Email" variant="outlined" type="text" placeholder="Email" {...register("Email", {required: true})} />
                    </ReviewBodyFormSectionInput>
                </ReviewBodyFormSection>
                <ReviewBodyFormSection>
                    <ReviewBodyFormSectionLabel>
                        Sales Id
                    </ReviewBodyFormSectionLabel>
                    <ReviewBodyFormSectionInput>
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Sales Id" variant="outlined" type="text" placeholder="Sales Id" {...register("Sales-Id", {required: true})} />
                    </ReviewBodyFormSectionInput>
                </ReviewBodyFormSection>
                <ReviewBodyFormSection>
                    <ReviewBodyFormSectionLabel>
                        Name
                    </ReviewBodyFormSectionLabel>
                    <ReviewBodyFormSectionInput>
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Name" variant="outlined" type="text" placeholder="Name" {...register("Name", {required: true})} />
                    </ReviewBodyFormSectionInput>
                </ReviewBodyFormSection>
                <ReviewBodyFormSection>
                    <ReviewBodyFormSectionLabel>
                        Rating
                    </ReviewBodyFormSectionLabel>
                    <ReviewBodyFormSectionInput>
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Rating 0-5" variant="outlined" type="number" placeholder="Rating 0-5" InputProps={{ inputProps: { min: 0, max: 5 } }} {...register("rating", {required: true})} />
                    </ReviewBodyFormSectionInput>
                </ReviewBodyFormSection>
                <ReviewBodyFormTextArea placeholder="Enter Comment" {...register("Review-Comments", {required: true})} />
                <Button type="submit" className={classes.button} >Save Review</Button>
            </form>
        </ReviewBodySection>
    </ReviewBody>
  )
}

export default Review;