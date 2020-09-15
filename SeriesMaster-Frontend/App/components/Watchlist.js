import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import ListItemImage from "./ListItemImage";
import ListItemText from "./ListItemText";
import imageSrc from "../assets/225030.jpg";
import PropTypes from "prop-types";

const Watchlist = ({ onPress }) => {
  return (
    <List>
      <ListItem onPress={onPress}>
        <ListItemImage imageSrc={imageSrc} />
        <ListItemText title="24" />
      </ListItem>
    </List>
  );
};

export default Watchlist;

Watchlist.propTypes = {
  onPress: PropTypes.func,
};
