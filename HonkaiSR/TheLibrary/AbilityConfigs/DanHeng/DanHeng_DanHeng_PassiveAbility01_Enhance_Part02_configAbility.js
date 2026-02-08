const configAbility = {
  "fileName": "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
      "valuePerStack": {
        "DanHeng_PassivePene": {
          "operator": "Variables[0] (0.36) || RETURN",
          "displayLines": "0.36",
          "constants": [],
          "variables": [
            0.36
          ]
        }
      }
    }
  ],
  "references": []
}