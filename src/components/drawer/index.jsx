import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../cards";
import { addItem, decreaseItem } from "../../store/actions/shopAction";

export default function DrawerComponent({ openDrawer, toggleDrawer }) {
  const shopList = useSelector((state) => state.shopList.item);
  const dispatch = useDispatch();
  const handleDecreaseItem = (e, itemId) => {
    e.stopPropagation();
    dispatch(decreaseItem(itemId));
  };

  const handleShop = (e, cardInfo) => {
    e.stopPropagation();
    dispatch(addItem(cardInfo));
  };
  const DrawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {shopList.length !== 0 ? (
        shopList.map((item) => (
          <Box key={item.id}>
            <Typography>shop list :</Typography>
            <List>
              <CardComponent info={item}>
                <Box
                  sx={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    color="primary"
                    xsx={{ padding: 2, width: "content" }}
                    variant="contained"
                    onClick={(e) => handleDecreaseItem(e, item.id)}
                  >
                    -
                  </Button>
                  <Typography sx={{ padding: 2 }}>
                    count: {item.count}
                  </Typography>
                  <Button
                    color="primary"
                    xsx={{ padding: 2, width: "content" }}
                    variant="contained"
                    onClick={(e) => handleShop(e, item)}
                    disabled={item.count === 30}
                  >
                    +
                  </Button>
                </Box>
                {item.count === 30 && (
                  <Typography color="error" variant="caption">
                    از هر محصول حداکثر 30 عدد میتوان سفارش داد
                  </Typography>
                )}{" "}
              </CardComponent>
            </List>
            <Divider />
          </Box>
        ))
      ) : (
        <Typography>empty basket!</Typography>
      )}
    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
}
