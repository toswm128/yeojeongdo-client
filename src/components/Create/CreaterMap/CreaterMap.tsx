import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const CreaterMap = () => {
  const { setMarker, markerState, selectMarker } = useCreate();
  const { searchMapListState, setCenterSearching, setSearchModal } =
    useSearch();

  const LatLng = {
    lat: searchMapListState.centerSearching
      ? searchMapListState.centerSearching.y
      : 35.6632143,
    lng: searchMapListState.centerSearching
      ? searchMapListState.centerSearching.x
      : 128.4140176,
  };

  return (
    <Map
      center={LatLng}
      style={{
        // 지도의 크기
        flex: "3 1 0%",
        height: "100%",
      }}
      level={3}
      onClick={(_t, mouseEvent: any) => {
        setSearchModal(false);
        setMarker({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
      }}
      onDragStart={() => setSearchModal(false)}
    >
      {markerState.LatLng && (
        <MapMarker
          position={markerState.LatLng}
          onDragEnd={(mouseEvent: any) => {
            console.log(mouseEvent.getPosition());
            setMarker({
              lat: mouseEvent.getPosition().Ma,
              lng: mouseEvent.getPosition().La,
            });
          }}
          draggable={true}
        ></MapMarker>
      )}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map(current => (
          <MapMarker
            onClick={() => {
              selectMarker(current);
            }}
            position={{ lat: current.y, lng: current.x }}
          />
        ))}
    </Map>
  );
};

export default CreaterMap;