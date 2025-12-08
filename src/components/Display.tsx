  type DisplayPropsType = {
    count: number
    maxCount: number
  }

  export const Display = ({count, maxCount}: DisplayPropsType) => {
  const display = count === maxCount ? 'display max-count' : 'display'
    return (
      <div className= {display}>
        {count}
      </div>
    );
  };