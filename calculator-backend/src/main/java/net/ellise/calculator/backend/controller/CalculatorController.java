package net.ellise.calculator.backend.controller;

import jakarta.websocket.server.PathParam;
import lombok.extern.slf4j.Slf4j;
import net.ellise.calculator.backend.io.in.CalculateRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class CalculatorController {

    @PostMapping("/{uuid}/calculate")
    String calculate(@PathParam("uuid") String uuid, @RequestBody CalculateRequest calculateRequest) {
        log.info("Session: {}", uuid);
        return calculateRequest.toString();
    }

}