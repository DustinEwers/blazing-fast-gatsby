import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const IpsumForm  = ({createParagraphs}) => {
        return <Formik
            initialValues={{ numberOfParagraphs: '3' }}
            validationSchema={Yup.object().shape({
                numberOfParagraphs: Yup.number()
                  .required('Required')
                  .min(1, "You need at least one paragraph.")
                  .max(100, "Let's not get too greedy"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                createParagraphs(values.numberOfParagraphs)
                setSubmitting(false);
            }}>
            {({ isSubmitting }) => (
                <Form>
                    <label>
                    How many paragraphs would you like? <br/>
                    <Field type="number" name="numberOfParagraphs" />
                    </label>
                    <ErrorMessage name="numberOfParagraphs" component="div" />
                    <br />
                    <button style={{ marginTop: `0.5rem`}} type="submit" disabled={isSubmitting}>
                        Ope!
                    </button>
                </Form>
            )}
        </Formik>
}

IpsumForm.propTypes = {
    createParagraphs: PropTypes.func,
}
  
IpsumForm.defaultProps = {
    createParagraphs: () => {},
}

export default IpsumForm