import ResultsList from "./resultsComponent/resultsListComponent";
import SearchComponent from "./searchComponent/search.component";
import DetailsComponent from "./detailsComponent/detailsComponent";

export function MainView() {
  return (
    <div>
      <h1>Satellite Tracker 🛰️</h1>
      <SearchComponent></SearchComponent>
      <div id="mainView">
        <ResultsList></ResultsList>
        <div>
          <DetailsComponent></DetailsComponent>
        </div>
      </div>
    </div>
  );
}

export default MainView;
