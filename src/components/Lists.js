import stateCodes from "../data/StateCodes.json";

export default function Lists(props) {
  const stateOptions = Object.entries(stateCodes).map(state => (
    <option key={state[0]} value={state[0]}>
      {state[1]}
    </option>
  ));

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Location
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={props.location}
        onChange={e => {
          props.setLocation(e.target.value);
        }}
      >
        {stateOptions}
      </select>
    </div>
  );
}
