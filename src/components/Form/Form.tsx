import cn from 'classnames';
import { useFormik } from 'formik';
import { useAppDispatch } from 'src/store/store-hooks';
import { shortUrl } from 'src/store/urlSlice/urlAction';
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
  const dispatch = useAppDispatch();
  const formik = useFormik<ShortUrlFormValues>({
    initialValues: {
      url: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(shortUrl(values.url));
      resetForm();
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
