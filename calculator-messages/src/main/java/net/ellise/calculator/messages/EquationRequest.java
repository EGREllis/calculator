package net.ellise.calculator.messages;

import java.util.UUID;

public record EquationRequest(UUID equationId, String equation) {
}
