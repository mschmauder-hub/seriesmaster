import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import ListItemImage from "./ListItemImage";
import ListItemText from "./ListItemText";
import PropTypes from "prop-types";

const CompletedList = ({ onPress, show }) => {
  return (
    <List>
      <ListItem onPress={onPress}>
        <ListItemImage imageSrc={show.imgSrc} />
        <ListItemText title={show.title} />
      </ListItem>
    </List>
  );
};

export default CompletedList;

CompletedList.propTypes = {
  onPress: PropTypes.func,
  show: PropTypes.object,
};
