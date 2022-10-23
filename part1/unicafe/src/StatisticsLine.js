const StatisticsLine = props => (
  <tbody>
    <tr>
      <th>{props.text}</th>
      <td>&nbsp;</td>
      <td>{props.value}</td>
    </tr>
  </tbody>
);

export default StatisticsLine;
