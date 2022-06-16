import { render } from '@testing-library/react';
import App from './App';

describe('테스트', () => {
  it('render name', () => {
    const { getByText } = render(<App title="ㅎㅇ" />);
    const header = getByText('제목: ㅎㅇ');
    expect(header).toBeInTheDocument();
  });
});
