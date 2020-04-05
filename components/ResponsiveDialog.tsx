import React, { SetStateAction } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import { useTheme } from "@material-ui/core/styles";

export const ResponsiveDialog = (props: {
  title?: any;
  children: React.ReactElement;
  renderActions?: () => {};
  open: boolean;
  handleClose: (state: SetStateAction<boolean>) => void;
  titleStyle?: any;
  contentStyle?: any;
  buttonStyle?: any;
  hideclose?: boolean;
  titleDivStyle?: any;
}) => {
  const {
    children,
    renderActions,
    title,
    open,
    handleClose,
    titleStyle,
    contentStyle,
    buttonStyle,
    hideclose,
    titleDivStyle = {}
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle style={titleStyle} id="responsive-dialog-title">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ...titleDivStyle
          }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "rgba(89, 89, 89, 0.95)",
              width: "100%"
            }}
          >
            {title}
          </span>
          {!hideclose && (
            <IconButton style={buttonStyle} onClick={() => handleClose(false)}>
              <CloseIcon />
            </IconButton>
          )}
        </div>
      </DialogTitle>
      <DialogContent style={contentStyle}>{children}</DialogContent>
      {renderActions && <DialogActions>{renderActions()}</DialogActions>}
    </Dialog>
  );
};
