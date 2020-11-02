import { Navbar, Footer } from './components';

function PublicLayout(props) {
  const { children, withFooter = true } = props;
  return (
    <div>
      <Navbar />
      <div className="p-0">
      {children}
      </div>
      {withFooter && <Footer />}
    </div>
  );
}

export default PublicLayout;
