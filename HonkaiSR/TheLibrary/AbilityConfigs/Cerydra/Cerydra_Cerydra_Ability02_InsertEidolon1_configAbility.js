const configAbility = {
  "fileName": "Cerydra_Cerydra_Ability02_InsertEidolon1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Ave Imperator"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": "Single Target (Primary)",
        "target2": "Caster",
        "invertCondition": true
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Cerydra_Template_ReachPromotionEidolon1"
    }
  ],
  "references": []
}