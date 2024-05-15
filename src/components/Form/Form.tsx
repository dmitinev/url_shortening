import cn from 'classnames';
import { useFormik } from 'formik';
import { ShortUrlFormValues } from 'src/types/types';
import * as yup from 'yup';
import { Button } from '../Button';
import './Form.scss';

const validationSchema: yup.ObjectSchema<ShortUrlFormValues> = yup
  .object()
  .shape({
    url: yup.string().url('Please add a link').required(),
  });

export const Form = () => {
  const formik = useFormik<ShortUrlFormValues>({
    initialValues: {
      url: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = cn('shortUrlForm__inputField', {
    form_error: formik.errors.url && formik.touched.url,
  });

  return (
    <section className="urlFormSection">
      <div className="container">
        <form
          onSubmit={formik.handleSubmit}
          className="shortUrlForm"
          autoComplete="off"
        >
          <input
            type="text"
            name="url"
            placeholder="Shorten a link here..."
            className={classes}
            value={formik.values.url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.url && formik.touched.url && (
            <span className="shortUrlForm__inputFieldError">
              Please add a link
            </span>
          )}
          <Button size="medium" type="submit" variant="square">
            Shorten It!
          </Button>
        </form>
      </div>
    </section>
  );
};
