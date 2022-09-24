import { fireEvent, render, screen } from '@testing-library/react';
import Rating from './Rating';
import { ratings } from '.';

describe("rating card rendering", () => {
  it("should render a list of options", async () => {
    // arrange
    render(<Rating />);

    // act
    const selections = screen.getAllByRole('listitem');

    // assert
    expect(selections).toHaveLength(5);
    selections.forEach((item, index) => {
      const { value } = ratings[index];
      expect(item).toHaveTextContent(`${value}`);
    });
  });

  it("should render a submit button", async () => {
    // arrange
    render(<Rating />);

    // assert
    expect(screen.getByRole('button')).toHaveTextContent(/submit/i);
  });
});

describe("submit button should submit rating", () => {
  test("redirected page should have selected rating of 3 out of 5", () => {

    // act
    render(<Rating />);

    // arrange
    const ratingSelections = screen.getAllByRole('listitem');

    ratingSelections.forEach((item, index) => {
      if (index === 2) {
        fireEvent.click(item);
      }
    });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    // assert
    expect(screen.getByTestId("ratingResult")).toHaveTextContent("You have selected 3 out of 5");
  });
});