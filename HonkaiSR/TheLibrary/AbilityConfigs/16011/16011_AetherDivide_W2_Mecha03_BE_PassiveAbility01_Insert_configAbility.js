const configAbility = {
  "fileName": "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Scorch"
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event's Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "AetherDivide_W2_Mecha03_BE_Damage"
    }
  ],
  "onAbort": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"428385014\">AetherDivide_W2_Mecha03_BE_Life</a>"
      },
      "failed": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}