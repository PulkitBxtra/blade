import ThermometerIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<ThermometerIcon />', () => {
  it('should render ThermometerIcon', () => {
    const { container } = renderWithTheme(
      <ThermometerIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
