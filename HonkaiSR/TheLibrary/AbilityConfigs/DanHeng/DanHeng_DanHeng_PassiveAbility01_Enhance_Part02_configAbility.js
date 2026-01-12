const configAbility = {
  "fileName": "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
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