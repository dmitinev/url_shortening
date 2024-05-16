import { Button } from 'components/Button';
import './Action.scss';

export const Action = () => {
  return (
    <section className="action">
      <div className="container action__container">
        <h2 className="action__heading">Boost your links today</h2>
        <Button type="button" size="small">
          Get started
        </Button>
      </div>
    </section>
  );
};
