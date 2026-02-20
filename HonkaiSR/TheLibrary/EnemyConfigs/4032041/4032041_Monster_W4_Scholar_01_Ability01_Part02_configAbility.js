const configAbility = {
  "fileName": "4032041_Monster_W4_Scholar_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]",
      "valuePerStack": {
        "MDF_StealthBreak_ActionDelayRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_389) || RETURN",
          "displayLines": "UnusedUnderThisBase_389",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_389"
          ]
        },
        "MDF_StealthBreak_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_390) || RETURN",
          "displayLines": "UnusedUnderThisBase_390",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_390"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}