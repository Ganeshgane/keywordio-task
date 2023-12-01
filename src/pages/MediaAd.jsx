// material ui
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";

// third party libraries
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const MediaAd = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          heading01: "",
          heading02: "",
          description01: "",
          landscapeImage: "",
          portraitImage: "",
          squareImage: "",
          videoUrl: "",

          businessName: "",
          buttonLabel: "",
          websiteUrl: "",
        }}
        validationSchema={Yup.object().shape({
          heading01: Yup.string(),
          heading02: Yup.string(),
          description01: Yup.string(),
          businessName: Yup.string(),
          buttonLabel: Yup.string(),
          websiteUrl: Yup.string(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          setFieldValue,
        }) => (
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ padding: "40px", border: "#eeeeee", m: "20px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    You are successfully Registered!
                  </Alert>
                </Snackbar>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel>Heading 01</InputLabel>
                        <TextField
                          id="heading-01"
                          name="heading01"
                          placeholder="Add a heading that would make users interested"
                          fullWidth
                          value={values.heading01}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.heading01 && errors.heading01 && (
                              <FormHelperText error id="heading-01-helper-text">
                                {errors.heading01}
                              </FormHelperText>
                            )
                          )}
                        />
                        {touched.heading01 && errors.heading01 && (
                          <FormHelperText error id="heading-01-helper-text">
                            {errors.heading01}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel>Heading 02</InputLabel>
                        <TextField
                          id="heading-02"
                          name="heading02"
                          placeholder="Add a heading that would make users interested"
                          fullWidth
                          value={values.heading02}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.heading02 && errors.heading02 && (
                              <FormHelperText error id="heading-02-helper-text">
                                {errors.heading02}
                              </FormHelperText>
                            )
                          )}
                        />
                        {touched.heading02 && errors.heading02 && (
                          <FormHelperText error id="heading-02-helper-text">
                            {errors.heading02}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel>Description 01</InputLabel>
                        <TextField
                          id="description01"
                          name="description01"
                          placeholder="Add primary text to help users understand more about products, services or offers"
                          fullWidth
                          value={values.description01}
                          multiline
                          minRows={5}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(
                            touched.description01 && errors.description01 && (
                              <FormHelperText
                                error
                                id="description01-helper-text"
                              >
                                {errors.description01}
                              </FormHelperText>
                            )
                          )}
                        />
                        {touched.description01 && errors.description01 && (
                          <FormHelperText error id="description01-helper-text">
                            {errors.description01}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel>Landscape marketing image</InputLabel>
                  <TextField
                    id="landscapeImage"
                    name="landscapeImage"
                    placeholder="Add the url of the image you want to use for the add"
                    fullWidth
                    value={values.landscapeImage}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.landscapeImage && errors.landscapeImage && (
                        <FormHelperText error id="landscapeImage-helper-text">
                          {errors.landscapeImage}
                        </FormHelperText>
                      )
                    )}
                  />
                  {touched.landscapeImage && errors.landscapeImage && (
                    <FormHelperText error id="landscapeImage-helper-text">
                      {errors.landscapeImage}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel>Portrait marketing image</InputLabel>
                  <TextField
                    id="portraitImage"
                    name="portraitImage"
                    placeholder="Add the url of the image you want to use for the add"
                    fullWidth
                    value={values.portraitImage}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.portraitImage && errors.portraitImage && (
                        <FormHelperText error id="portraitImage-helper-text">
                          {errors.portraitImage}
                        </FormHelperText>
                      )
                    )}
                  />
                  {touched.portraitImage && errors.portraitImage && (
                    <FormHelperText error id="portraitImage-helper-text">
                      {errors.portraitImage}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel>Square marketing image</InputLabel>
                  <TextField
                    id="squareImage"
                    name="squareImage"
                    placeholder="Add the url of the image you want to use for the add"
                    fullWidth
                    value={values.squareImage}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.squareImage && errors.squareImage && (
                        <FormHelperText error id="squareImage-helper-text">
                          {errors.squareImage}
                        </FormHelperText>
                      )
                    )}
                  />
                  {touched.squareImage && errors.squareImage && (
                    <FormHelperText error id="squareImage-helper-text">
                      {errors.squareImage}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel>Video URL</InputLabel>
                  <TextField
                    id="videoUrl"
                    name="videoUrl"
                    placeholder="Add the url of the video you want to use for the add"
                    fullWidth
                    value={values.videoUrl}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.videoUrl && errors.videoUrl && (
                        <FormHelperText error id="videoUrl-helper-text">
                          {errors.videoUrl}
                        </FormHelperText>
                      )
                    )}
                  />
                  {touched.videoUrl && errors.videoUrl && (
                    <FormHelperText error id="videoUrl-helper-text">
                      {errors.videoUrl}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel>Business Name</InputLabel>
                  <TextField
                    id="business-name"
                    name="businessName"
                    placeholder="Add your Business Name"
                    fullWidth
                    value={values.businessName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.businessName && errors.businessName && (
                        <FormHelperText error id="business-name-helper-text">
                          {errors.businessName}
                        </FormHelperText>
                      )
                    )}
                  />
                  {touched.businessName && errors.businessName && (
                    <FormHelperText error id="business-name-helper-text">
                      {errors.businessName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel>Button Label</InputLabel>
                  <FormControl fullWidth>
                    <InputLabel id="button-label-select-label">
                      Select a lable that best suits your ad
                    </InputLabel>
                    <Select
                      labelId="button-label-select-label"
                      id="button-label-select"
                      value={values.buttonLabel}
                      label="Button Label"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        Select a lable that best suits your ad
                      </MenuItem>
                    </Select>
                  </FormControl>
                  {touched.buttonLabel && errors.buttonLabel && (
                    <FormHelperText error id="button-label-helper-text">
                      {errors.buttonLabel}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel>Website URL</InputLabel>
                  <TextField
                    id="website-url"
                    name="websiteUrl"
                    placeholder="Add the url of landing page you want to redirect users to"
                    fullWidth
                    value={values.websiteUrl}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.websiteUrl && errors.websiteUrl && (
                        <FormHelperText error id="website-url-helper-text">
                          {errors.websiteUrl}
                        </FormHelperText>
                      )
                    )}
                  />
                  {touched.websiteUrl && errors.websiteUrl && (
                    <FormHelperText error id="website-url-helper-text">
                      {errors.websiteUrl}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="outlined"
                  type="submit"
                  color="primary"
                  onClick={() => navigate("/create-ads")}
                  sx={{ mr: "18px" }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  onClick={() => navigate("/create-ads/submitted")}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default MediaAd;
