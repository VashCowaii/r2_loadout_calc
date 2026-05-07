const configAbility = {
  "fileName": "11407_Castotice_BE_PassiveAbility",
  "childAbilityList": [
    "11407_Castotice_BE_PassiveAbility",
    "11407_GlobalAbility_Castorice_Insert",
    "11407_GlobalAbility_Castorice_Insert02"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166883348\">GlobalAbility_Castorice_Main</a>"
    }
  ],
  "references": [],
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}