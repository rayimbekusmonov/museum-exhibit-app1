Drop your 21 exhibit photos in this folder using exactly these filenames
(referenced from `data/exhibitsData.ts`):

```
exhibit1.jpg   exhibit8.jpg    exhibit15.jpg
exhibit2.jpg   exhibit9.jpg    exhibit16.jpg
exhibit3.jpg   exhibit10.jpg   exhibit17.jpg
exhibit4.jpg   exhibit11.jpg   exhibit18.jpg
exhibit5.jpg   exhibit12.jpg   exhibit19.jpg
exhibit6.jpg   exhibit13.jpg   exhibit20.jpg
exhibit7.jpg   exhibit14.jpg   exhibit21.jpg
```

`.png` works too — just update the `image` field for that exhibit in
`data/exhibitsData.ts` to match (e.g. `/assets/exhibit3.png`).

Until a photo is added, the frame renders empty/transparent gracefully
(no broken-image icon) thanks to the `onError` handler in
`components/ExhibitView.tsx`.
