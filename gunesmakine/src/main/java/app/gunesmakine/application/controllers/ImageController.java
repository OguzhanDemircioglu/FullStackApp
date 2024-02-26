package app.gunesmakine.application.controllers;

import app.gunesmakine.application.models.Image;
import app.gunesmakine.application.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
public class ImageController {
    private final ImageService service;

    @PostMapping(value = "/save")
    public ResponseEntity<List<Image>> save(@RequestBody List<Object> list) throws Exception {
        try {
            return ResponseEntity.ok(service.createImages(list));
        }catch (Exception e){
            throw new Exception("işlem geçersiz");
        }
    }
}
