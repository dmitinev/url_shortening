import { useFormik } from 'formik';
import { ShortUrlFormValues } from 'src/types/types';
import { Button } from '../Button';
import './Form.scss';

export const Form = () => {
  const formik = useFormik<ShortUrlFormValues>({
    initialValues: {
      url: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
            className="shortUrlForm__inputField"
            value={formik.values.url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button size="medium" type="submit" variant="square">
            Shorten It!
          </Button>
        </form>
      </div>
    </section>
  );
};
